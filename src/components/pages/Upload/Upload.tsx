import { useState } from 'react'
import './UploadStyles.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { CatIcon } from 'components/common/Icons/CatIcon/CatIcon'

interface IUpload {}

const Upload: React.FC<IUpload> = () => {
  const { register, handleSubmit } = useForm()
  const [image, setImage] = useState<File | null>(null)
  const [imageData, setImageData] = useState<string | null>(null)

  const onSubmit = (data: FieldValues) => {
    console.log(data, image)
  }

  const onChangeImage = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
      setImage(e.currentTarget.files[0])
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const result = reader.result as string
        setImageData(result)
      })
      reader.readAsDataURL(e.currentTarget.files[0])
    }
  }

  return (
    <div className='upload'>
      <h2>{'Upload a cat image!'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='upload__form'>
        <div className='upload__form__preview'>
          {imageData ? <img src={imageData || ''} /> : <CatIcon />}
        </div>
        <input
          {...register('picture')}
          type='file'
          accept='image/*'
          id='file-input'
          onChange={onChangeImage}
        />
        <button disabled={!imageData}>Upload</button>
      </form>
    </div>
  )
}

export default Upload
