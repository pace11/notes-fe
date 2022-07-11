import { useEffect, useState } from 'react'
import {
  Drawer,
  Classes,
  Position,
  Button,
  EditableText,
  H3,
  Menu,
  MenuItem,
  Card,
} from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'
import CCard from '../components/card'
import Modal from '../components/modal'
import { detail, get, mutation } from '../api'
import { colors } from '../const'
import moment from 'moment'

export default function Homepage() {
  const styles = {
    display: 'flex',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    height: '100vh',
    backgroundColor: '#ced6e0',
    padding: '10px',
  }

  // const clientId =
  //   '136303758379-f8ugbf76n9adccjnpkomd9dndigrumt0.apps.googleusercontent.com'

  const childMenu = (
    <Menu>
      {colors &&
        colors.map((item, idx) => (
          <MenuItem
            key={String(idx)}
            icon={
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  background: item.color,
                }}
              />
            }
            text={item.title}
            onClick={() => handleChange(item.color, 'background_color')}
          />
        ))}
    </Menu>
  )

  const [notes, setNotes] = useState(false)
  const [detailNotes, setDetailNotes] = useState(false)
  const [selectedId, setSelectedId] = useState(false)

  const fetchAllNotes = () => {
    get({
      endpoint: 'notes',
    })
      .then((res) => {
        if (res?.code === 200) {
          setNotes(res?.data)
        }
      })
      .catch((err) => err)
  }

  const handleChange = (val, key) => {
    setDetailNotes((prevState) => ({
      ...prevState,
      [key]: val,
    }))
  }

  const handleClickAdd = () => {
    setDetailNotes({
      title: null,
      content: null,
      background_color: null,
    })
  }

  const handleDelete = (val) => {
    setSelectedId(val)
  }

  const handleClickCard = (val) => {
    detail({
      endpoint: 'notes',
      id: val,
    })
      .then((res) => {
        if (res.data?.id) {
          setDetailNotes(res?.data)
        }
      })
      .catch((err) => err)
  }

  const handleConfirmYes = () => {
    mutation({
      endpoint: 'notes',
      method: 'DELETE',
      id: selectedId,
    })
      .then((res) => {
        if (res?.code === 200) {
          setSelectedId(false)
          fetchAllNotes()
        }
      })
      .catch((err) => err)
  }

  const handleSubmit = () => {
    mutation({
      endpoint: 'notes',
      method: detailNotes?.id ? 'PUT' : 'POST',
      id: detailNotes?.id || null,
      payload: {
        title: detailNotes?.title,
        content: detailNotes?.content,
        background_color: detailNotes?.background_color,
        ...(detailNotes?.id && {
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        }),
      },
    })
      .then((res) => {
        if (res?.code === 200) {
          setDetailNotes(false)
          fetchAllNotes()
        }
      })
      .catch((err) => err)
  }

  useEffect(() => {
    fetchAllNotes()
  }, [])

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId,
  //       scope: '',
  //     })
  //   }

  //   gapi.load('client:auth2', start)
  // })

  return (
    <div style={{ ...styles }}>
      {notes &&
        notes.map((item, idx) => (
          <CCard
            key={String(idx)}
            id={item.id}
            title={item.title}
            content={item.content}
            color={item.background_color}
            clickId={handleClickCard}
            onDelete={handleDelete}
          />
        ))}
      <Card
        style={{
          margin: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#dfe4ea',
          width: '180px',
          height: '180px',
        }}
        interactive
        onClick={handleClickAdd}
      >
        <Button icon="add" large minimal>
          Add
        </Button>
      </Card>
      <Drawer
        isOpen={detailNotes}
        onClose={() => setDetailNotes(false)}
        position={Position.BOTTOM}
      >
        <div
          className={Classes.DRAWER_BODY}
          style={{ background: detailNotes?.background_color }}
        >
          <div className={Classes.DIALOG_BODY}>
            <H3>
              <EditableText
                value={detailNotes?.title}
                onChange={(val) => handleChange(val, 'title')}
              />
            </H3>
            <EditableText
              value={detailNotes?.content}
              onChange={(val) => handleChange(val, 'content')}
              multiline
            />
          </div>
        </div>
        <div className={Classes.DRAWER_FOOTER}>
          <Button
            icon="add"
            style={{ marginRight: '5px' }}
            intent="primary"
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Popover2 content={childMenu} placement="right-end">
            <Button icon="color-fill" minimal />
          </Popover2>
        </div>
      </Drawer>
      <Modal
        title="Delete Data"
        description="Are you sure to delete this data ?"
        isOpen={selectedId}
        onClose={() => setSelectedId(false)}
        onConfirmYes={handleConfirmYes}
      />
    </div>
  )
}
