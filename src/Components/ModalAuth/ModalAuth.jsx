import React from 'react';
import css from './ModalAuth.module.scss'
import {Button, Checkbox, Form, Input} from 'antd';
import {useDispatch} from "react-redux";
import {loggingIn} from "../../Redux/appReducer";


const ModalAuth = ({setModalVisible}) => {

    const dispatch = useDispatch()
    const [form] = Form.useForm()


    const onFinish = (values) => {
        dispatch(loggingIn(values))
        setModalVisible(false)

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div onClick={() => setModalVisible(false)} className={css.modal_wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={css.modal_container}>

                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        username: 'johnd',
                        password: 'm38rmF$',
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item

                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Sorry but credentials are hardcoded - use : name johnd',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Sorry but credentials are hardcoded - use : password m38rmF$',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Button onClick={() => setModalVisible(false)}
                                danger>Cancel</Button>

                        <Button
                            style={{marginLeft: '1rem'}}
                            type="primary"
                            htmlType="submit"

                        >
                            Submit
                        </Button>

                    </Form.Item>
                    <p>Sorry, but credentials are hardcoded - though it works as if you have an account with token (you
                        can
                        look through Network)</p>
                </Form>
            </div>

        </div>

    );

};

export default ModalAuth;