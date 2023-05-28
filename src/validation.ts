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
    .min(8, 'Пароль должен содежать от 8 символов')
    .max(20, 'Пароль должен содержать не более 20 символов')
    .typeError('Пароль обязательное поле')

const yupName = yup
    .string()
    .trim('Обязательное поле')
    .required('Обязательное поле')
    .matches(/^[A-ZА-Яa-zа-яё\s-]+$/i, 'Недопустимый символ')

export { yupEmail, yupPassword, yupName }
