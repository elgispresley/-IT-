'use client'

import {authConfig} from '@/configs/auth';
import {getServerSession} from 'next-auth';
import Layout from "@/components/layout/Layout";
import styles from '../styles/profile/Profile.module.scss'
import {useEffect, useState} from "react";

export default async function Profile() {
    const [applications, setApplications] = useState<any>([]);
  const session = await getServerSession(authConfig);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/api/application/');
            if (!res.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const applicationsData = await res.json();
            setApplications(applicationsData.rows)
        };

        fetchData();
    }, []);


    return (
      <Layout>
          <div className={styles.wrapperProfile}>
              {session?.user?.image &&
                  <img className={styles.imgProfile} src={session.user.image} alt="image"/>
              }
              <h1 className={styles.nameProfile}>{session?.user?.name}</h1>
          </div>
      </Layout>
  )
}
