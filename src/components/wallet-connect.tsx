import { Button, Checkbox, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { MetamaskIcon, TokenPocketIcon, WalletIcon } from '@components/icons'
import { truncateString } from '@utils/formatString'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'


export default function WalletConnect() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { address, connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  const onDisconnect = (key: string | number) => {
    disconnect()
    onOpenChange()
  }

  if (isConnected && address) {
    return (
      <>
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
            onAction={(key) => onDisconnect(key)}
          >
            <DropdownItem key="disconnect" className="text-danger" color="danger">
              Disconnect
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    )
  }

  return (
    <>
      <Button
        className="min-w-[160px] overflow-hidden font-normal"
        startContent={<WalletIcon />}
        onPress={onOpen}
      >
        Connect Wallet
      </Button>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Connect Wallet</ModalHeader>
              <ModalBody className="mb-4">
                <div className="p-2 bg-default-200 rounded-md">
                  <Checkbox defaultSelected>I certify that I have read and accept the updated<Link href="https://puffer.fi/terms-of-use" target="_blank">Terms of Use</Link> and <Link href="https://puffer.fi/terms-of-use" target="_blank">Privacy Notice</Link>.</Checkbox>
                </div>
                <div className="flex gap-4 mt-2">
                  {connectors.map((connector, i) => (
                    <Button
                      key={connector.id}
                      size="lg"
                      className="flex-1 rounded-md h-[56px]"
                      endContent={connector.id === 'metaMask' ? <MetamaskIcon /> : <TokenPocketIcon />}
                      onClick={() => connect({ connector })}
                    >
                      {connector.name}
                    </Button>
                  ))}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}