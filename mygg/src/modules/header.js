export const SIGN_FORM_SHOWING = "header/SIGN_FORM_SHOWING";

const initialState = {
    isSign: false,
};

export const signFormShowing = () => ({
    type: SIGN_FORM_SHOWING,
});

function header(state = initialState, action) {
    switch (action.type) {
        case SIGN_FORM_SHOWING:
            return {
                ...state,
                isSign: state.isSign ? false : true,
            };
        default:
            return state;
    }
}

export default header;
