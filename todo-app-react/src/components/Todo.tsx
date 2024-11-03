import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';
import { Todo as TodoType } from '../types/TodoTypes';

interface FormInputsType {
  description: string;
  isCompleted: boolean;
  targetDate: string;
}

export const Todo = () => {
  const { id } = useParams();
  const authContext = useAuth();
  const [todo, setTodo] = useState<TodoType>({
    id: 0,
    description: '',
    isCompleted: false,
    targetDate: new Date(),
  });
  const initialValues = {
    description: todo.description,
    isCompleted: todo.isCompleted,
    targetDate: todo.targetDate.toString(),
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormInputsType>({
    mode: 'onTouched',
    reValidateMode: "onChange",
    defaultValues: initialValues,
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  const retrieveTodo = () => {
    if (id) {
      getTodoById('admin', parseInt(id))
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container w-75">
      <h1>Todo details</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="align-items-center mt-4">
          <Col className="col-sm-2">
            <Form.Label>Description</Form.Label>
          </Col>
          <Col className="col-sm-10">
            <Form.Control
              className={
                (errors.description ? 'is-invalid' : '')
              }
              type="text"
              defaultValue={todo.description}
              {...register('description', {
                required: 'Description is required',
              })}
            />
          </Col>
        </Row>
        {errors.description && (
          <Form.Text className="text-danger">
            {errors.description.message}
          </Form.Text>
        )}
        <Row className="align-items-center mt-4">
          <Col className="col-sm-2">
            <Form.Label>Target date</Form.Label>
          </Col>
          <Col className="col-sm-10">
            <Form.Control
              type="date"
              placeholder=""
              {...register('targetDate', {})}
            />
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col className="col-sm-2">
            <Form.Check.Label>Is Completed</Form.Check.Label>
          </Col>
          <Col className="col-sm-10">
            <Form.Control
              type="checkbox"
              placeholder=""
              className="form-check-input"
              {...register('isCompleted', {})}
            />
          </Col>
        </Row>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};
