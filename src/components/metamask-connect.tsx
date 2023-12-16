import { useState } from 'react'
import { Button, Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { truncateString } from '@utils/formatString'

export default function Metamask() {
	const { address, connector, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()
  const onClickMenu = (key: string | number) => {
    disconnect()
  }

  if (isConnected) {
    return (
      <>
        {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
        {/* <span>{ensName ? `${ensName} (${address})` : address}</span> */}
        {/* <span>Connected to {connector?.name}</span> */}
        {isConnected && address && (
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                className="min-w-[160px] overflow-hidden font-normal"
              >
                {truncateString(address.toLowerCase())}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              onAction={(key) => onClickMenu(key)}
            >
              <DropdownItem key="disconnect" className="text-danger" color="danger">
                Disconnect
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </>
    )
  }

	return (
		<>
      {connectors.map((connector) => (
        <Button
          // disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="min-w-[160px]"
        >
          Connect Wallet
          {/* {!connector.ready && ' (unsupported)'} */}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </Button>
      ))}
    </>
	)
}
