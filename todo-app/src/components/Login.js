import React, { useCallback } from 'react'
import {Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography} from "@mui/material"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

        const navi = useNavigate();
        const onSubmit = useCallback((e) => {
            e.preventDefault();
            const data = new FormData(e.target);
    
            const username = data.get("username");
            const password = data.get("password");
    
            const resp = login2(username, password);
    
            console.log(resp);
    
            if(resp && resp.data === 200) {
                navi("/");
            }
        }, []);

        const login2 = useCallback(async (username, password) => {
            try {

                const response = await axios.post('http://localhost:80/api/member/login', {username: username, password: password});

                
                console.log(response);
                if(response.data && response.status === 200 && response.data.item.token !==null && response.data.item.token !==""){
                    console.log("들어옴?!")
                    console.log(response.data.item.token);
                    localStorage.setItem("ACCESS_TOKEN_" + response.data.item.token,"token");
                    navi('/login')
                }

                return response;
            } catch(error) {
                console.log(error);
            }
        }, []);
    

    return (
        <div>

        <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>

        <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
            <Typography component="h1" variant='h5'>
                로그인
            </Typography>
                </Grid>
                <Grid item xs={12}>
                        <TextField
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id='username'
                            label="아이디"
                            autoFocus
                        ></TextField>
                    </Grid>
                <Grid item xs={12}>
                    {/* input 대신에 사용할수있는 componets */}
                    <TextField
                            name="password"
                            variant="outlined"
                            required
                            fullWidth
                            id='password'
                            label="비밀번호"
                            type="password"
                        ></TextField>
         </Grid>
         <Grid item xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
                로그인
                </Button>
         </Grid>
     </Grid>
     <Grid container justifyContent="flex-end">
        <Grid item>
            <Link href='/join' variant='body2'>
                계정이 없으시면 여기서 회원가입하세요.
            </Link>
        </Grid>
     </Grid>
        </form>
                </Container>
        </div>
        )
}

export default Login