import { createSlice } from "@reduxjs/toolkit"
import { registerUser, verifyOtp, resendOtp, loginUser, getUserInfo, logoutUser, addUserAddress, deleteUserAddress } from "../actions/userActions"

const initialState = {
    loading: false,
    error: null,
    userInfoError: null,
    user: null,
    isOTPSent: false,
    isOTPVerified: false,
    isOTPResent: false,
    message: null,
    isAuthenticated: false,
    isUserAddressAdded: false,
    isUserAddressDelete: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUserError: (state) => {
            return {
                ...state,
                error: null,
                isUserAddressAdded: false,
                isUserAddressDelete: false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isOTPSent: true
            }
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isOTPSent: false,
            }
        })

        // verify otp
        builder.addCase(verifyOtp.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(verifyOtp.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isOTPVerified: true
            }
        })
        builder.addCase(verifyOtp.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isOTPVerified: false,
                message: null
            }
        })

        // resend otp
        builder.addCase(resendOtp.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(resendOtp.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isOTPResent: true
            }
        })
        builder.addCase(resendOtp.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isOTPResent: false,
                message: null
            }
        })


        // login user
        builder.addCase(loginUser.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isAuthenticated: true
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false,
                message: null
            }
        })

        // user info
        builder.addCase(getUserInfo.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                userInfoError: null,
                user: action.payload,
                isAuthenticated: true
            }
        })
        builder.addCase(getUserInfo.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                userInfoError: action.payload,
                isAuthenticated: false,
                user: null
            }
        })


        // user logout
        builder.addCase(logoutUser.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(logoutUser.fulfilled, () => {
            return {
                ...initialState
            }
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })

        // add user address
        builder.addCase(addUserAddress.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(addUserAddress.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isUserAddressAdded: true
            }
        })
        builder.addCase(addUserAddress.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isUserAddressAdded: false,
                message: null
            }
        })

        // user delete address
        builder.addCase(deleteUserAddress.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })
        builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                message: action.payload,
                isUserAddressDelete: true
            }
        })
        builder.addCase(deleteUserAddress.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isUserAddressDelete: false,
                message: null
            }
        })
    },
});


export const { clearUserError } = userSlice.actions
export default userSlice.reducer;
