import * as yup from "yup";

export const announceSerializer: yup.ObjectSchema<any> = yup.object().shape({
  id: yup.string().required(),
  kilometer: yup.string().required(),
  price_FIPE: yup.string().required(),
  price: yup.string().required(),
  description: yup.string().required(),
  image_cover: yup.string().required(),
  published: yup.boolean().required(),
  tag: yup.boolean().required(),
  images: yup.array().required(),
  brand: yup.object().shape({
    id: yup.string().required(),
    brand: yup.string().required(),
  }),
  fuel: yup.object().shape({
    id: yup.string().required(),
    fuel: yup.string().required(),
  }),
  color: yup.object().shape({
    id: yup.string().required(),
    color: yup.string().required(),
  }),
  year: yup.object().shape({
    id: yup.string().required(),
    year: yup.string().required(),
  }),
  model: yup.object().shape({
    id: yup.string().required(),
    model: yup.string().required(),
  }),
  comments: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      comment: yup.string().required(),
      createdAt: yup.date().required(),
    })
  ),
});

export const announceCreateSerializer: yup.ObjectSchema<any> = yup
  .object()
  .shape({
    id: yup.string().required(),
    kilometer: yup.string().required(),
    price_FIPE: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    image_cover: yup.string().required(),
    published: yup.boolean().required(),
    tag: yup.boolean().required(),
    images: yup.array().required(),
    brand: yup.object().shape({
      id: yup.string().required(),
      brand: yup.string().required(),
    }),
    fuel: yup.object().shape({
      id: yup.string().required(),
      fuel: yup.string().required(),
    }),
    color: yup.object().shape({
      id: yup.string().required(),
      color: yup.string().required(),
    }),
    year: yup.object().shape({
      id: yup.string().required(),
      year: yup.string().required(),
    }),
    model: yup.object().shape({
      id: yup.string().required(),
      model: yup.string().required(),
    }),
    comments: yup.array().of(
      yup.object().shape({
        id: yup.string().required(),
        comment: yup.string().required(),
        createdAt: yup.date().required(),
      })
    ),
    user: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().email().required(),
      cpf: yup.string().required(),
      cellphone: yup.string().required(),
      date_birth: yup.string().required(),
      description: yup.string().required(),
      account_type: yup.boolean().required(),
      announce: yup.array(announceSerializer),
    }),
  });
