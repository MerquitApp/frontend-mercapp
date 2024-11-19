import ForgotPassForm from '@/domain/users/userCases/ForgotPassForm';

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ForgotPassForm />
    </div>
  );
}
