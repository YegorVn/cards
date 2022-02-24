const Tag = ({data, className}) => {
  return (
    <div className={"tag " + className}>
      <div className="tag__text ps-4 pe-4">{data.text}</div>
    </div>
  );
}
const TagList = ({tags, className, elClassName}) => {
  return (
    <div className={"d-flex " + className}>
      {tags && tags.map((data) => {
        return <Tag data={data} key={data.text} className={elClassName}/>;
      })}
    </div>
  );
}

export default TagList