import * as yup from 'yup'

const yupEmail = yup
    .string()
    .required('Обязательное поле')
    .email('Неверный Email')
    .label('Email')
    .typeError('Email обязательное поле')

const yupPassword = yup
    .string()
    .required('Обязательное поле')
    .min(8, 'Значение должно быть больше 8')
    .max(20, 'Значение должно быть меньше 20')
    .typeError('Пароль обязательное поле')

export { yupEmail, yupPassword }
