import { useState } from 'react'
import './UploadStyles.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { CatIcon } from 'components/common/Icons/CatIcon/CatIcon'
import { CatImageUploadDTO, uploadCatImage } from 'api/catApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

interface IUpload {}

const Upload: React.FC<IUpload> = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [imageData, setImageData] = useState<string | null>(null)

  const isImageFile = (file: File) => {
    return file && file.type.split('/')[0] === 'image'
  }

  const onSubmit = (data: FieldValues) => {
    setIsUploading(true)
    const imageData: CatImageUploadDTO = {
      file: data.picture[0]
    }
    uploadCatImage(imageData)
      .then(() => {
        toast.success('Image upload successful!')
        setIsUploading(false)
        navigate('/', { replace: true })
      })
      .catch((error) => {
        let message = 'Image failed to upload'
        if (error.response?.data) {
          message = error.response.data
        }
        toast.error(`Error: ${message}`)
        setIsUploading(false)
      })
  }

  // When an image is chosen set it's data for preview
  const onChangeImage = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null
    if (!file || !isImageFile(file)) {
      reset()
      toast.warning('You must select an image file')
      return
    }
    if (file) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const result = reader.result as string
        setImageData(result)
      })
      reader.readAsDataURL(file)
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
