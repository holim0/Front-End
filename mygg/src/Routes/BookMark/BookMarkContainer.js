import React from "react";
import BookMarkPresenter from "./BookMarkPresenter";
import { useSelector } from "react-redux";

const BookMarkContainer = () => {
    const bookMarkList = useSelector(
        (state) => state.auth.userData.bookmarkPosts
    );

    const userNickName = useSelector((state) => state.auth.userData.nickname);
    return (
        <BookMarkPresenter
            bookMarkList={bookMarkList}
            userNickName={userNickName}
        />
    );
};

export default BookMarkContainer;
