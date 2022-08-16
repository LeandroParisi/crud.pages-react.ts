import React, { useState } from 'react'
import { useEntitiesManagementContext } from 'VisualElements/CRUDPage/Containers'
import Modal from 'VisualElements/Templates/Modal/Modal'
import styles from './EntityCard.module.scss'
import { EntityCardProps } from './EntityCard.types'
import CardHeader from './subComponents/CardHeader/CardHeader'
import EditModal from './subComponents/EditModal/EditModal'
import EntityCardSection from './subComponents/EntityCardSection/EntityCardSection'
import SideBar from './subComponents/Sidebar/SideBar'

function EntityCard<TEntity>({ entity } : EntityCardProps<TEntity>) {
  const [openModal, setOpenModal] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const {
    crudActionProvider,
    entityAdapter,
    defaultCardHeaderImage,
  } = useEntitiesManagementContext<TEntity>()

  const {
    id, image, isActive, name, sections,
  } = entityAdapter.AdaptEntityToManagementView(entity)

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
          defaultImage={defaultCardHeaderImage}
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
