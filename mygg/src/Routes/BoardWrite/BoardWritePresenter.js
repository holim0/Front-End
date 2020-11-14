import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import theme from "Components/Theme";
import DatePicker from "react-date-picker";
import Editor from "./Editor";

const Container = styled.div`
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
`;

const Head = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
`;
const Box = styled.div`
    display: flex;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Title = styled.input`
    border: 1px solid #cccccc;
    width: 100%;
    border-radius: 5px;
`;

const Cate = styled(Select)`
    width: 160px;
    margin-right: 20px;
`;

const Form = styled.form`
    width: 100%;
`;

const Text = styled.textarea`
    border: solid 2px #1e90ff;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    font-size: ${(props) => props.font};
    resize: none;
`;

const Span = styled.span``;

const FormGroup = styled.div`
    --input-color: #99a3ba;
    --input-border: #cdd9ed;
    --input-background: #fff;
    --input-placeholder: #cbd1dc;
    --input-border-focus: #275efe;
    --group-color: var(--input-color);
    --group-border: var(--input-border);
    --group-background: #eef4ff;
    --group-color-focus: #fff;
    --group-border-focus: var(--input-border-focus);
    --group-background-focus: #678efe;
    position: relative;
    display: flex;
    width: 100%;
    & > span,
    .form-field {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
    .form-field {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        width: 1%;
        margin-top: 0;
        margin-bottom: 0;
    }
    & > span {
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: var(--group-color);
        background: var(--group-background);
        border: 1px solid var(--group-border);
        transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
    }
    &:focus-within {
        & > span {
            color: var(--group-color-focus);
            background: var(--group-background-focus);
            border-color: var(--group-border-focus);
        }
    }
`;

const LinkInput = styled.input`
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99a3ba;
    border: 1px solid #cdd9ed;
    background: #fff;
    transition: border 0.3s ease;
    &::placeholder {
        color: #cbd1dc;
    }
    &:focus {
        outline: none;
        border-color: #275efe;
    }
`;

const Input = styled.input`
    border: 1px solid #cccccc;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
`;

const Button = styled.button`
    /* background-color: #64b5f6;
    border-radius: 5px;
    height: 30px;
    padding: 2px 4px;
    margin-right: 20px;
    &:hover {
        transform: scale(0.9);
    } */

    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem "Roboto Slab", sans-serif;
    padding: 1em 2em;
    letter-spacing: 0.05rem;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: blue;
    }
`;

const DateContainer = styled(DatePicker)`
    width: 100%;
    .react-datepicker {
        border-radius: 5px;
    }
`;

const Subspan = styled.div`
    margin: 12px 0px;
    font-weight: bold;
    font-size: ${(props) => props.theme.ls};
`;

const category = [
    { value: "necessity", label: "Necessity" },
    { value: "cloth", label: "Cloth" },
    { value: "food", label: "Food" },
    { value: "goods", label: "Goods" },
    { value: "beauty", label: "Beauty" },
    { value: "etc", label: "Etc" },
];

const BoardWritePresenter = () => {
    const [text, handleText] = useState("");
    const [value, onChange] = useState(new Date());

    const handleChange = () => {
        handleText("");
    };

    return (
        <Container>
            <Head>공동 구매 글쓰기</Head>
            <Top>
                <Cate options={category} />
                <Title type="text" placeholder="제목을 입력해 주세요"></Title>
            </Top>
            {/* <Form onSubmit={handleChange}>
                <Text
                    font={theme.ls}
                    type="text"
                    placeholder="내용을 입력해 주세요"
                ></Text>
            </Form> */}
            <Form>
                <Editor placeholder={`Write Something...`} />
            </Form>

            <Subspan>제품 링크</Subspan>
            <FormGroup>
                <Span>https://</Span>
                <LinkInput
                    type="text"
                    placeholder="domain.tld"
                    className="form-field"
                ></LinkInput>
            </FormGroup>
            <Subspan>마감일</Subspan>
            <DateContainer onChange={onChange} value={value} />
            <Subspan>인원 수</Subspan>
            <Input type="number"></Input>
            <Box>
                <Button>SUBMIT</Button>
                <Button>CANCEL</Button>
            </Box>
        </Container>
    );
};

export default BoardWritePresenter;
