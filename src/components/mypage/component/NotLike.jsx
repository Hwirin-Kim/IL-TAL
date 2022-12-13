import { useNavigate } from "react-router-dom";
import { CTBox } from "../../../styles/themeStyle";
import * as Styled from "../StyledInfo";

const NotLike = (props) => {
  const navigate = useNavigate();
  return (
    <Styled.ComWrap display={`flex`}>
      <CTBox size={`24px`} margin={`10px`}>
        아직 좋아요 한 {props.name}가 없습니다
      </CTBox>
      <CTBox size={`24px`} margin={`10px`}>
        {props.name}를 좋아요 해보세요!
      </CTBox>
      <CTBox size={`24px`} margin={`10px`}>
        👇👇👇
      </CTBox>
      <CTBox
        size={`24px`}
        margin={`10px`}
        onClick={() => {
          navigate(`${props.link}`);
        }}
        color={`#1e9fc0`}
      >
        좋아요 하러가기
      </CTBox>
    </Styled.ComWrap>
  );
};

export default NotLike;
