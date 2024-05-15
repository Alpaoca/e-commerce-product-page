export interface NavButtonProps {
  label: string;
  url?: string;
}

function NavButton(props: NavButtonProps) {
  return (
    <>
      <div className="flex self-center mx-4">
        <p className="font-kumbh-sans text-dark-grayish-blue">{props.label}</p>
      </div>
    </>
  );
}

export default NavButton;
