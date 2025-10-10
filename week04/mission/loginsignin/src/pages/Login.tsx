import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm";
import { validateSignin, type UserSigninInformation } from "../utils/validate";

const Login = () => {
  const {values, errors, touched, getInputProps} = useForm<UserSigninInformation>({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateSignin,
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    
  }

  const isDisabled = 
    Object.values(errors || {}).some((error) => error.length > 0) || // 오류가 있으면 true
    Object.values(values).some((value) => value === ""); // 입력값이 비어있으면 true

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-col gap-3'>
        <div className="flex justify-between">
          <p 
            className="text-white text-2xl cursor-pointer"
            onClick={() => navigate(-1)}
          >&lt;</p>
          <h1 className="text-white text-2xl mb-2">로그인</h1>
          <p></p>
        </div>
        <input
          {...getInputProps('email')}
          className={`border border-gray-300 text-white placeholder-gray-500 w-[250px] p-[5px] rounded-sm
          ${errors?.email && touched?.email ? 'border-red-500' : ''}`}
          type="email"
          placeholder="이메일을 입력해주세요!"
        />
        {errors?.email && touched?.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <input
          {...getInputProps('password')}
          className={`border border-gray-300 text-white placeholder-gray-500 w-[250px] p-[5px] rounded-sm
          ${errors?.password && touched?.password ? 'border-red-500' : ''}`}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
        />
        {errors?.password && touched?.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
        )}
        <button
          type="button"
          className="w-full text-white bg-gray-900 py-[5px] rounded-sm text-lg hover:bg-gray-700 disabled:text-gray-600"
          onClick={handleSubmit}
          disabled={isDisabled}
        >로그인</button>
      </div>
    </div>
  )
}

export default Login
