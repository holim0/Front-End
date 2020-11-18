import React from "react";
import { ImFire } from "react-icons/im";

import styled, { css } from "styled-components";

const ProgressBar = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const ProgressBarWrap = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 8px;
    border-radius: 12px;
    background: ${(props) => props.theme.yellow};
`;

const ProgressGage = styled.div`
    position: absolute;
    bottom: 0;
    height: 8px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: ${(props) => `${props.progress}%`};
    z-index: 2;
    background: ${(props) => props.theme.blue};
    ${(props) =>
        props.progress === 100 &&
        css`
            background: ${(props) => props.theme.red};
        `}
`;

const Progressing = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    font-size: ${(props) => props.theme.ss};
`;

const Finished = styled.div`
    position: absolute;
    bottom: 10px;
    color: ${(props) => props.theme.red};
    right: 0;
`;

const Progress = ({ participateUsers, limitNumberOfPeople }) => {
    const checkPercent = (percent) => {
        if (percent > 90) {
            return "한자리 남았어요!";
        }
        if (percent > 70) {
            return "막차 탑승하세요.";
        }
        if (percent > 50) {
            return "곧 완료됩니다!";
        }
        if (percent > 5) {
            return "여러분을 기다리고 있어요.";
        }
        if (percent === 0) {
            return "관심이 필요해요.";
        }
    };

    return (
        <div>
            <ProgressBar>
                <ProgressBarWrap></ProgressBarWrap>
                <ProgressGage
                    progress={Math.round(
                        (participateUsers.length / limitNumberOfPeople) * 100
                    )}>
                    {/* 이곳 조건문은 후에 finishcheck가 되면 수정 */}
                    {participateUsers.length === limitNumberOfPeople && (
                        <Finished>
                            <ImFire />
                        </Finished>
                    )}
                </ProgressGage>
                {participateUsers.length === limitNumberOfPeople || (
                    <Progressing>
                        {checkPercent(
                            Math.round(
                                (participateUsers.length /
                                    limitNumberOfPeople) *
                                    100
                            )
                        )}
                    </Progressing>
                )}
            </ProgressBar>
        </div>
    );
};

export default Progress;
