const Tag = ({data}) => {
    return (
      <div className="tag ">
        <div className="tag__text ps-4 pe-4">{data.text}</div>
      </div>
    );
}

export default Tag