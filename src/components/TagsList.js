import {Tag} from '.'

const TagsList = ({tags, className}) => {
  return (
    <div className={"d-flex " + className}>
      {tags && tags.map((data) => {
        return <Tag data={data} key={data.text}/>;
      })}
    </div>
  );
}

export default TagsList