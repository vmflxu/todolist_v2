import React, { useState } from 'react'
import { Button, HelpDiv } from './styleStore'
import { BiArrowFromBottom, BiX, BiCheck, BiDetail } from "react-icons/bi";

function Help() {
    const [open,setOpen] = useState(true);
    
    return (
        <HelpDiv open={open}>
            <BiX /> : 삭제 <br />
            <BiDetail /> : 상세보기 <br />
            <BiCheck /> : 완료 <br />
            <BiArrowFromBottom /> : 완료취소 <br />
            수정은 포스트잇에 직접 작성 후, <br />
            아무 버튼을 누르거나 Tap key<br />
            <br />
            <Button onClick={()=>setOpen((prev)=>!prev)}>닫기</Button>
        </HelpDiv>
    )
}

export default Help