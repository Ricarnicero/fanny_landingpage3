'use client'

export default function FannyImg(props) {
    return(
        <div>

      <img src={props.src} alt={props.alt}/>
      <style jsx>{`
          img{
            mask-image: linear-gradient(black 90%, transparent 100%);
          }
        `}</style>
        </div>

    );
}