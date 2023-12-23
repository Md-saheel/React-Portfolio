/* eslint-disable react/prop-types */
export default function Project(props) {
  return (
    <div target='_blank' className='box'>
      <a target='_blank' href={props.link} rel='noreferrer'>
        <img src={props.photoName} alt='project-img' className='project-img' />
        <p>
          <span className='code'>&lt;</span>
          {props.name}
          <span className='code'>/&gt;</span>
        </p>
      </a>
    </div>
  );
}
