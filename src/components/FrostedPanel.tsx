export const FrostedPanel = (props: {  children: React.ReactNode;}) => {
    return (
      <div className="bg-base-200 p-10 m-10 flex flex-col">
        {props.children}
      </div>
    );
  };