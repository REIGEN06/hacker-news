/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { Row } from "../styledComponents/Sections";
import { Title, Author, Text, Score, Description } from "../styledComponents/Text";
import { UnixToLocaleTime, decodeHtml } from "../utils/functions";
export const CommentCard = (data:any) => {
    const comment = data.data;
    console.log(comment);

   
    
    return (
        <CommentWrapper>
            <Row>
                {comment.deleted
                    ?<Text>Комментарий был удален</Text>
                    :<Author>{comment.by}</Author>
                }
                <Text>{UnixToLocaleTime(comment.time)}</Text>
            </Row>
            <Description>{decodeHtml(comment.text).replace(/<\/?[^>]+>/g, '')}</Description>
        </CommentWrapper>
    );
  };

  const CommentWrapper = styled.section`
  border: 1.5px solid #dce1e6;
  margin:20px;
  align-items:center;
  border-radius:10px;
  padding: 5px 10px 5px;
  background: #ffffff;
`;