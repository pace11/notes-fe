import { H3, Icon } from '@blueprintjs/core'
import { GoogleLogin } from 'react-google-login'
import { parseJwt } from '../helpers'

export default function Homepage() {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#ced6e0',
    padding: '10px',
  }

  const onSuccess = (res) => {
    console.log('dapat =>', res)
  }

  console.log(parseJwt("eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiZDY4NWY1ZThmYzYyZDc1ODcwNWMxZWIwZThhNzUyNGM0NzU5NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTM2MzAzNzU4Mzc5LWY4dWdiZjc2bjlhZGNjam5wa29tZDlkbmRpZ3J1bXQwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTM2MzAzNzU4Mzc5LWY4dWdiZjc2bjlhZGNjam5wa29tZDlkbmRpZ3J1bXQwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MjMzMjU2NDYwMjYwMTUxNjUxIiwiZW1haWwiOiJyeWFuam9rZXI4N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImxuQmdzRDdBTlVEUUd2R0MyZDhoa2ciLCJuYW1lIjoiUnlhbiBQYWNlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNyS2RLcnhsUC1OZUI2QUk2VThPakt3T1FJRjdKdjktNmp3ak4zcWdRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlJ5YW4iLCJmYW1pbHlfbmFtZSI6IlBhY2UiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY1NzQ5MTY1OSwiZXhwIjoxNjU3NDk1MjU5LCJqdGkiOiJkMTUyNTc3ODk5ZWFlYzFkYjkzOWVmYzhkMjY3MzI0MmU1ZDVjZDY4In0.Ij4TalEZP2XkrtJblaI0IANrMOGjp3s9j46NlxHoDAKrIY_ZH_kTb0cp9OJ66UQ5ghps9JRZqKNf3VTJ3O2Qen1SXlWfhRty_TYvMKeyqFj-aw0RD17vM9Ivntz9svuWxnfG4at7qCHUQc1F8my9nETR1TylNhoJnnkTif1lPcp0QieqvTB_2xBf_kt9bfutJt7XKIPB2DplaGok0PHyoebrF-Wc5EbPmq1EGELjDzN7JzFzV8C17bo4VxnckWEbar9xQ6WI0-SYZ0RobuWsSVOqf_ikD7t612anWZLrT9UfHEJ8ril0tLhzCUtp-PQGMmG_eCk1BVfTMnJ1nGa-UA"))

  return (
    <div style={{ ...styles }}>
      <H3>
        <Icon icon="document" size={30} />
        NOTES
      </H3>
      <GoogleLogin
        onSuccess={onSuccess}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      />
    </div>
  )
}
