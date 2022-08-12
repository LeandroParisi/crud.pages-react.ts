import classNames from 'classnames'
import React, { useState } from 'react'
import Modal from 'shared/templates/Modal/Modal'
import styles from './EntityCard.module.scss'
import { EntityCardProps } from './EntityCard.types'
import CardHeader from './subComponents/CardHeader/CardHeader'
import EditModal from './subComponents/EditModal/EditModal'
import EntityCardSection from './subComponents/EntityCardSection/EntityCardSection'
import SideBar from './subComponents/Sidebar/SideBar'

function EntityCard({ entity } : EntityCardProps) {
  const [openModal, setOpenModal] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const {
    id, name, image, sections, isActive,
  } = entity

  return (
    <>
      <Modal
        isOpened={openModal}
        close={() => setOpenModal(false)}
        className={styles.editModal}
      >
        <EditModal
          entity={editEntity}
          type={type}
          editRequest={editRequest}
        />
      </Modal>

      <article
        className={classNames(styles.entity, { [styles.inactive]: !isActive })}
        key={id}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        <CardHeader
          image={image}
          type={type}
          name={name}
        />
        <hr />

        <div className={classNames(styles.sectionsContainer, { [styles.focused]: isFocused })}>
          {sections.map((section, index) => (
            <>
              <EntityCardSection section={section} />
              {index !== sections.length - 1 && <hr />}
            </>
          ))}
        </div>

        <SideBar
          isActive={isActive}
          openEdit={() => setOpenModal(!openModal)}
          activate={activate}
          deactivate={deactivate}
          deleteRequest={deleteRequest}
          id={id}
        />

      </article>
    </>

  )
}

export { EntityCard }
