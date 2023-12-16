import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppState } from '../index'
import { AppDispatch } from '../index'
import { useAccount } from 'wagmi'

export default function Updater() {
  const dispatch = useDispatch<AppDispatch>()
  const { address } = useAccount()
  
  useEffect(() => {
    if (address) {
      const checkUserAuth = async () => {
        // vailidate accessToken
        const walletAddress = address.toLowerCase()
        console.log('walletAddress: ', walletAddress);
        // location.reload()
        return
        // login if without accessToken, or accessToken verify failed
        // if (accessToken && isValidToken(accessToken)) {
        //   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // } else {
        //   console.log('token expired');
        //   await login(walletAddress)
        // }
      }
      checkUserAuth()
    }
  }, [dispatch, address])
  
  return null
}
