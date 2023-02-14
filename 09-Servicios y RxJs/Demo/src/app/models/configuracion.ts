import { CursoAlphaService } from "../services/curso-alpha.service"
import { UsuarioService } from "../services/usuario.service"

export interface Configuracion {
    urlAPI: string,
    servicios:{
        cursoService: CursoAlphaService,
        usuarioService: UsuarioService
    }
}