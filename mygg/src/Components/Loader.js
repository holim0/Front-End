import React, { useEffect } from "react";
import styled from "styled-components";

const WrapLoader = styled.div`
    position: relative;
    min-height: calc(100vh - 60px);
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .boxes {
        height: 32px;
        width: 32px;
        position: relative;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        margin-top: 32px;
        -webkit-transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg)
            translateZ(0px);
        transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    }
    .boxes .box {
        width: 32px;
        height: 32px;
        top: 0px;
        left: 0;
        position: absolute;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .boxes .box:nth-child(1) {
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
        -webkit-animation: box1 1s linear infinite;
        animation: box1 1s linear infinite;
    }
    .boxes .box:nth-child(2) {
        -webkit-transform: translate(0, 100%);
        transform: translate(0, 100%);
        -webkit-animation: box2 1s linear infinite;
        animation: box2 1s linear infinite;
    }
    .boxes .box:nth-child(3) {
        -webkit-transform: translate(100%, 100%);
        transform: translate(100%, 100%);
        -webkit-animation: box3 1s linear infinite;
        animation: box3 1s linear infinite;
    }
    .boxes .box:nth-child(4) {
        -webkit-transform: translate(200%, 0);
        transform: translate(200%, 0);
        -webkit-animation: box4 1s linear infinite;
        animation: box4 1s linear infinite;
    }

    .boxes .box > div {
        background: #5c8df6;
        --translateZ: 15.5px;
        --rotateY: 0deg;
        --rotateX: 0deg;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #5c8df6;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        -webkit-transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
            translateZ(var(--translateZ));
        transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
            translateZ(var(--translateZ));
    }

    .boxes .box > div:nth-child(1) {
        top: 0;
        left: 0;
        background: #5c8df6;
    }
    .boxes .box > div:nth-child(2) {
        background: #145af2;
        right: 0;
        --rotateY: 90deg;
    }
    .boxes .box > div:nth-child(3) {
        background: #447cf5;
        --rotateX: -90deg;
    }
    .boxes .box > div:nth-child(4) {
        background: ${(props) => props.theme.border};
        top: 0;
        left: 0;
        --translateZ: -90px;
    }

    @keyframes box1 {
        0%,
        50% {
            transform: translate(100%, 0);
        }
        100% {
            transform: translate(200%, 0);
        }
    }

    @keyframes box2 {
        0% {
            transform: translate(0, 100%);
        }
        50% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(100%, 0);
        }
    }

    @keyframes box3 {
        0%,
        50% {
            transform: translate(100%, 100%);
        }
        100% {
            transform: translate(0, 100%);
        }
    }

    @keyframes box4 {
        0% {
            transform: translate(200%, 0);
        }
        50% {
            transform: translate(200%, 100%);
        }
        100% {
            transform: translate(100%, 100%);
        }
    }
`;

export const Loader = () => {
    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    });

    return (
        <WrapLoader>
            <Container>
                <div className="boxes">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Container>
        </WrapLoader>
    );
};

export default Loader;
