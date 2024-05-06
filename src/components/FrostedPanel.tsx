import "./FrostedPanel.scss";

export const FrostedPanel = (props: { children: React.ReactNode; className?: string; id?: string}) => {
    return (
      <div id={props.id} className={"frosted-panel p-10 m-10 rounded-xl flex flex-col " + props.className} >
        {props.children}
      </div>
    );
  };