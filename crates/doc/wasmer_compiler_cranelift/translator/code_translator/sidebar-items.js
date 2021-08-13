initSidebarItems({"fn":[["bitcast_arguments","A helper for bitcasting a sequence of values (e.g. function arguments). If a value is a vector type that does not match its expected type, this will modify the value in place to point to the result of a `raw_bitcast`. This conversion is necessary to translate Wasm code that uses `V128` as function parameters (or implicitly in block parameters) and still use specific CLIF types (e.g. `I32X4`) in the function body."],["canonicalise_then_brnz","The same but for a `brnz` instruction."],["canonicalise_then_brz","The same but for a `brz` instruction."],["canonicalise_then_jump","Generate a `jump` instruction, but first cast all 128-bit vector values to I8X16 if they don’t have that type.  This is done in somewhat roundabout way so as to ensure that we almost never have to do any heap allocation."],["canonicalise_v128_values","Cast to I8X16, any vector values in `values` that are of “non-canonical” type (meaning, not I8X16), and return them in a slice.  A pre-scan is made to determine whether any casts are actually necessary, and if not, the original slice is returned.  Otherwise the cast values are returned in a slice that belongs to the caller-supplied `SmallVec`."],["finalise_atomic_mem_addr",""],["fold_atomic_mem_addr",""],["get_heap_addr","Get the address+offset to use for a heap access."],["is_non_canonical_v128",""],["mem_op_size",""],["optionally_bitcast_vector","Some SIMD operations only operate on I8X16 in CLIF; this will convert them to that type by adding a raw_bitcast if necessary."],["pop1_with_bitcast","A helper for popping and bitcasting a single value; since SIMD values can lose their type by using v128 (i.e. CLIF’s I8x16) we must re-type the values using a bitcast to avoid CLIF typing issues."],["pop2_with_bitcast","A helper for popping and bitcasting two values; since SIMD values can lose their type by using v128 (i.e. CLIF’s I8x16) we must re-type the values using a bitcast to avoid CLIF typing issues."],["prepare_load","Prepare for a load; factors out common functionality between load and load_extend operations."],["translate_atomic_cas",""],["translate_atomic_load",""],["translate_atomic_rmw",""],["translate_atomic_store",""],["translate_br_if",""],["translate_br_if_args",""],["translate_fcmp",""],["translate_icmp",""],["translate_load","Translate a load instruction."],["translate_operator","Translates wasm operators into Cranelift IR instructions. Returns `true` if it inserted a return."],["translate_store","Translate a store instruction."],["translate_unreachable_operator","Deals with a Wasm instruction located in an unreachable portion of the code. Most of them are dropped but special ones like `End` or `Else` signal the potential end of the unreachable portion so the translation state must be updated accordingly."],["translate_vector_fcmp",""],["translate_vector_icmp",""],["type_of","Determine the returned value type of a WebAssembly operator"],["wasm_param_types","A helper to extract all the `Type` listings of each variable in `params` for only parameters the return true for `is_wasm`, typically paired with `is_wasm_return` or `is_wasm_parameter`."]]});