import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Siderbar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vanessabrazuna.png',
      name: 'Vanessa Brazuna',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-28 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://randomuser.me/api/portraits/lego/5.jpg',
      name: 'Lego Dev',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-05 20:05:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
