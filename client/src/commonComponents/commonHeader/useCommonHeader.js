import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../store/AuthSlice';
import { useSelector } from 'react-redux';

export default function useCommonHeader() {
    const [logoutLoading, setLogoutLoading] = useState(false);
    const dispatch = useDispatch();
    const isAllowed = useSelector((store) => store.AuthSlice.isAllowed)
    const LogoutHandler = () => {
        if (isAllowed) {
            dispatch(LogoutUser({ setLogoutLoading }))
        }
     
    }


        return (
            {
                logoutLoading,
                LogoutHandler
            }
        )
    }
