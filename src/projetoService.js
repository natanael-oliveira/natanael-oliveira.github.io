import api from './api';
export default class ProjetoService {
    constructor() {
        this.projetos = []
    }
    async render() {
        try {
            const data = await api.get('data.json')
            this.projetos = data.data.projetos
        } catch (e) {
            console.error("Error:", e.message)
        }
    }
    async list() {
        await this.render()
        return this.projetos
    }

}