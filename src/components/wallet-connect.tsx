import { Button, Checkbox, Link, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { MetamaskIcon, TokenPocketIcon, WalletIcon } from '@components/icons'
import Metamask from './metamask-connect'

export default function WalletConnect() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  return (
    <>
      <Button
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
                  <Button size="lg" className="flex-1 rounded-md h-[56px]" endContent={<MetamaskIcon />}>
                    Metamask
                  </Button>
                  <Button size="lg" className="flex-1 rounded-md h-[56px]" endContent={<TokenPocketIcon />}>
                    Token Pocket
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}