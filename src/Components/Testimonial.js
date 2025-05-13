import Card from './Card'
const Testimonial = (props) => {
  return (
      <div className='testimonial'>
        <div>
          <h1>Our Testimonials</h1>
        </div>
        <div>
          <Card reviews={props.reviews}></Card>
        </div>
      </div>
  );
};

export default Testimonial;
