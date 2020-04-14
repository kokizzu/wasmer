use crate::code::CodegenError;
/*
use wasmer_runtime_core::parse::{wp_type_to_type, LoadError};
use wasmer_runtime_core::types::Type;
 */
use wasmparser::TypeOrFuncType as WpTypeOrFuncType;
use wasm_common::Type;

pub fn blocktype_to_type(ty: WpTypeOrFuncType) -> Result<Type, CodegenError> {
    match ty {
        WpTypeOrFuncType::Type(inner_ty) => Ok(wp_type_to_type(inner_ty)?),
        _ => {
            return Err(CodegenError {
                message:
                    "the wasmer llvm backend does not yet support the multi-value return extension"
                        .to_string(),
            });
        }
    }
}

impl From<LoadError> for CodegenError {
    fn from(other: LoadError) -> CodegenError {
        CodegenError {
            message: format!("{:?}", other),
        }
    }
}
