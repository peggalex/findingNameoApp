/*import React from 'react';
import {SetState, Ref, hash, waitForAjaxCall} from './Utilities';

import { MainNav } from '../types';
import { useNavigation } from '@react-navigation/native';

function SignupPage(){
    const navigation = useNavigation();
    let formRef: Ref<HTMLFormElement|null> = React.useRef(null);

    const validate = (): boolean => {
        let form = formRef.current!;
        if (form.password.value !== form.password2.value){
            form.password2.setCustomValidity("passwords must match.");
        } else {
            form.password2.setCustomValidity('');
        }
        return form.password.value !== form.password2.value;
    }

    const signup = async (e: React.FormEvent): Promise<boolean> => {
        e.preventDefault();

        let form = formRef.current!;
        let passwordHashed = await hash(form.password.value);
        try {
            await waitForAjaxCall('put', `
                /register/${form.username.value}
                /nickname/${form.nickname.value}
                /password/${passwordHashed}
            `);
            alert("register successful!");
            navigation.navigate(MainNav.LoginPage);
        } catch {
            alert("register failed.");
        }

        return false;
    }

    return <form id='signupPage' onSubmit={signup} method='post' className='col centerCross' ref={formRef}>
        <h1>Signup</h1>

        <label htmlFor='username'>username</label>
        <input name='username' type="text" pattern="[\dA-z_]{1,20}" title="Alphanumeric and underscores." required></input>

        <label htmlFor='nickname'>nickname</label>
        <input name='nickname' type="text" pattern="[\dA-z_ ]+" title="Alphanumeric, underscores and spaces." required></input>

        <label htmlFor='password'>password</label>
        <input name='password' type='password' required></input>

        <label htmlFor='password2'>retype password</label>
        <input name='password2' type='password' required></input>

        <div className='spacer'></div>

        <div id='buttons' className="row center">
            <button id='back' type="button" onClick={() => navigation.navigate(MainNav.FrontPage)}>back</button>
            <button onClick={validate} id='signup' type="submit">signup</button>
        </div>

    </form>;
}

export default SignupPage;*/