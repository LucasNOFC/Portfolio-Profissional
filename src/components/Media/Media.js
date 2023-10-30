const socialMediaOptions = []

function Media() {
    return (
          <ul className='SocialMedia'>
            { textOptions.map( (Media) => (
              (
                <li className="option"><p>{Media}</p></li>
              )
            ))}
          </ul>
    );
  }

export default Media;