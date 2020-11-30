import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
    margin: 0;
    width: 100%;
    /* height: 100vh; */
    overflow: hidden;
    z-index: 500;
    background-color: ${(props) => props.theme.black};
    /* opacity: 0.3; */
`;

const Container = styled.div`
    .modal {
        font-size: 20px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        width: 100%;

        background-color: #f5f5f5;
    }
    .modal > .header {
        width: 100%;
        border-bottom: 1px solid gray;
        font-size: 18px;
        text-align: center;
        padding: 5px;
    }
    .modal > .content {
        width: 100%;
        padding: 10px 5px;
    }
    .modal > .actions {
        width: 100%;
        padding: 10px 5px;
        margin: auto;
        text-align: center;
    }
    .modal > .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 1px solid #cfcece;
    }
`;

const Box2 = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    padding: 0 10px;
`;

const CancelModal = () => (
    <Popup trigger={<button className="button"> CANCEL </button>} modal nested>
        {(close) => (
            <Box>
                <Container>
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> 알림창 </div>
                        <div className="content">
                            글쓰기를 취소하시겠습니까?
                        </div>
                        <Box2 className="actions">
                            <Button as={Link} to="/">
                                OK
                            </Button>
                            <Button
                                onClick={() => {
                                    close();
                                }}>
                                CLOSE
                            </Button>
                        </Box2>
                    </div>
                </Container>
            </Box>
        )}
    </Popup>
);

export default CancelModal;
