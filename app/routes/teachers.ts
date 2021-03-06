import { Router } from 'express'
import controller from '../controllers/teachers'

const router = Router()

router.route('/')
    .get((req, res, next) => {
        controller.getTeachers()
            .then(teachers => res.status(200).send(teachers))
    })
    .post((req, res, next) => {
        controller.createTeacher(req.body.first, req.body.last)
            .then(id => res.location(req.baseUrl + '/' + String(id)).status(201).send())
    })

router.route('/:id(\\d+)')
    .get((req, res, next) => {
        controller.getTeacher(+req.params.id)
            .then(teacher => res.status(200).send(teacher))
            .catch(() => res.status(404).send())
    })
    .put((req, res, next) => {
        controller.updateTeacher(+req.params.id, req.body.first, req.body.last)
            .then(() => res.status(204).send())
            .catch(() => res.status(404).send())
    })
    .delete((req, res, next) => {
        controller.deleteTeacher(+req.params.id)
            .then(() => res.status(204).send())
            .catch(() => res.status(404).send())
    })

router.route('/:id(\\d+)/classes')
    .get((req, res, next) => {
        controller.getClasses(+req.params.id)
            .then(classes => res.status(200).send(classes))
    })

router.route('/:id(\\d+)/students')
    .get((req, res, next) => {
        controller.getStudents(+req.params.id)
            .then(students => res.status(200).send(students))
    })

export default router