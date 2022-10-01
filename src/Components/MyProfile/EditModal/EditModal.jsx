import React, {useEffect} from 'react';
import {Button, Col, Form, Input, Modal, Row} from 'antd';
import {useDispatch} from "react-redux";

import {editUser} from "../../../Redux/usersReducer";


const EditModal = ({formVisible, setFormVisible, destructedUserData}) => {

    const dispatch = useDispatch();

    const [form] = Form.useForm()


    //set values into form
    useEffect(() => {
        form.setFieldsValue(
            {
                username: destructedUserData.userUsername,
                name: destructedUserData.userFirstname,
                lastname: destructedUserData.userLastname,
                address: destructedUserData.userCity,
                phone: destructedUserData.userTel,
            }
        )
    }, [destructedUserData, form])


    const onEditProfile = (values) => {
        dispatch(editUser(values, destructedUserData.userId))
        setFormVisible(false)
    }

    return (
        <Modal

            title={"Edit Profile"}
            open={formVisible}
            onCancel={() => setFormVisible(false)}
            footer={null}
            destroyOnClose={true}
        >
            <Form

                form={form}
                name="basic"
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                initialValues={
                    {
                        name: 'name'
                    }

                }
                onFinish={onEditProfile}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input username',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name',
                        },
                    ]}
                >
                    <Input type={'text'}/>
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input last name',
                        },
                    ]}
                >
                    <Input type={'text'}/>
                </Form.Item>

                <Form.Item
                    label="City"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input City',
                        },
                    ]}
                >
                    <Input type={'text'}/>
                </Form.Item>

                <Form.Item
                    label="Telephone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input number',
                        },
                    ]}
                >
                    <Input type={'text'}/>
                </Form.Item>


                <Row style={{justifyContent: 'flex-end'}}>
                    <Col>
                        <Button type="primary" htmlType="submit"
                                style={{marginRight: '10px', background: "green"}}>
                            "Edit Profile"
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => setFormVisible(false)}
                            type="default"
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Modal>
    );
};

export default EditModal;