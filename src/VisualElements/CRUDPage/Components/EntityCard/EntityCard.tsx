import classNames from 'classnames'
import React, { useMemo, useState } from 'react'
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
  } = useMemo(() => entityAdapter.AdaptEntityToManagementView(entity), [entity])

  const editEntity = useMemo(() => entityAdapter.AdaptEntityToEditView(entity), [entity])

  return (
    <>
      <Modal
        isOpened={openModal}
        close={() => setOpenModal(false)}
        // className={styles.editModal}
      >
        <EditModal
          entity={editEntity}
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
          id={id}
        />

      </article>
    </>

  )
}

export { EntityCard }
