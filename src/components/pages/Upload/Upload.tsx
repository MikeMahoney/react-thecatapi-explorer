import { useState } from 'react'
import './UploadStyles.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { CatIcon } from 'components/common/Icons/CatIcon/CatIcon'
import { CatImageFileDTO, uploadCatImage } from 'api/catApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

interface IUpload {}

const Upload: React.FC<IUpload> = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [imageData, setImageData] = useState<string | null>(null)

  const onSubmit = (data: FieldValues) => {
    setIsUploading(true)
    const imageData: CatImageFileDTO = {
      file: data.picture[0]
    }
    uploadCatImage(imageData)
      .then(() => {
        toast.success('Image upload successful!')
        setIsUploading(false)
        navigate('/', { replace: true })
      })
      .catch((error) => {
        toast.error('Error: Image failed to upload')
        console.log(error)
        setIsUploading(false)
      })
  }

  const onChangeImage = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files && e.currentTarget.files[0]) {
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
      {isUploading ? (
        <ThreeDots
          height='80'
          width='80'
          radius='9'
          color='#ff913d'
          ariaLabel='three-dots-loading'
          visible={true}
        />
      ) : (
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
      )}
    </div>
  )
}

export default Upload
