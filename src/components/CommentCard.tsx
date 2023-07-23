/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { Row } from "../styledComponents/Sections";
import { Author, Text, Score, Description } from "../styledComponents/Text";
import { UnixToLocaleTime, decodeHtml } from "../utils/functions";
import { StoryType, StoryTypeObject } from "../utils/const";
import { StyledButton } from "../styledComponents/Buttons";
import { getStoriesByIds } from "../utils/HN_API";
import { useQuery } from "react-query";

export const CommentCard = (story:StoryTypeObject) => {
    const comment = story.data;
    let wantKids = undefined;
    const { isLoading, isError, data, refetch, isFetching } = useQuery((comment.id).toString(),  ()=>getStoriesByIds(comment.kids),
        {
            refetchOnWindowFocus: false,
            enabled: wantKids,
        })

    console.log(data);
    
    const getKidsComments = ()=>{
        wantKids = true;
    }

    if (!comment.deleted){
        return (
            <CommentWrapper>
                <Row>
                    <Author>{comment.by}</Author>
                    <Text>{UnixToLocaleTime(comment.time)}</Text>
                </Row>
                <Description>{decodeHtml(comment.text).replace(/<\/?[^>]+>/g, '')}</Description>
                <StyledButton onClick={() => getKidsComments()}>Ответов: {comment.kids?.length || 0}</StyledButton>
                {data&&data.map((kidsComment:any)=><CommentCard key={kidsComment.id} data={kidsComment}/>)}
            </CommentWrapper>
        )
    } else {
        return (<></>)
    }
  };

  const CommentWrapper = styled.section`
  border: none;
  margin:20px;
  display:flex;
  width:90%; //хз, по левому краю не получается комменты поставить
  flex-direction:column;
  border-radius:10px;
  padding: 5px 10px 5px;
  background: #ffffff;
`;