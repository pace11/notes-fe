import { Button, Card as CardComp } from '@blueprintjs/core'

function Card({ content, title, color, clickId, id, onDelete }) {
  const styles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: color,
    margin: '5px',
    height: '180px',
    width: '180px',
    zIndex: 0,
    padding: 0,
  }

  return (
    <CardComp style={{ ...styles }} interactive>
      <div className="card-comp" onClick={() => clickId(id)}>
        <p>
          <h3 style={{ margin: '0 0 10px 0', padding: '0' }}>{title}</h3>
          {content}
        </p>
      </div>
      <div className="card-footer">
        <Button
          icon="trash"
          intent="danger"
          small
          minimal
          onClick={() => onDelete(id)}
        >
          delete
        </Button>
      </div>
      <style>
        {`
          .card-comp {
            position: absolute;
            width: 100%;
            height: 140px;
            word-break: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            padding: 10px;
          }

          .bp4-card:hover .card-footer {
            opacity: 1;
            visibility: visible;
            bottom: 0;
          }
          
          .card-footer {
            position: absolute;
            display: flex;
            justify-content: center;
            bottom: -40px;
            left: 0;
            right: 0;
            padding: 5px;
            background: #f1f2f6;
            opacity: 0;
            visibility: hidden;
            transition: all .5s ease;
            z-index: 2;
          }
        `}
      </style>
    </CardComp>
  )
}

export default Card
