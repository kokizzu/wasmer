(function() {var implementors = {};
implementors["wasmer_c_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"enum\" href=\"wasmer_c_api/deprecated/export/enum.wasmer_import_export_kind.html\" title=\"enum wasmer_c_api::deprecated::export::wasmer_import_export_kind\">wasmer_import_export_kind</a>","synthetic":false,"types":["wasmer_c_api::deprecated::export::wasmer_import_export_kind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_functype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_functype_t\">wasm_functype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::function::wasm_functype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_globaltype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_globaltype_t\">wasm_globaltype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::global::wasm_globaltype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_tabletype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_tabletype_t\">wasm_tabletype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::table::wasm_tabletype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_memorytype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_memorytype_t\">wasm_memorytype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::memory::wasm_memorytype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"wasmer_c_api/wasm_c_api/types/enum.wasm_mutability_enum.html\" title=\"enum wasmer_c_api::wasm_c_api::types::wasm_mutability_enum\">wasm_mutability_enum</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::mutability::wasm_mutability_enum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"wasmer_c_api/wasm_c_api/types/enum.wasm_valkind_enum.html\" title=\"enum wasmer_c_api::wasm_c_api::types::wasm_valkind_enum\">wasm_valkind_enum</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::value::wasm_valkind_enum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer_types/values/enum.Value.html\" title=\"enum wasmer_types::values::Value\">Value</a>&lt;<a class=\"struct\" href=\"wasmer/externals/function/struct.Function.html\" title=\"struct wasmer::externals::function::Function\">Function</a>&gt;&gt; for <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::value::wasm_val_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ <a class=\"enum\" href=\"wasmer_types/values/enum.Value.html\" title=\"enum wasmer_types::values::Value\">Value</a>&lt;<a class=\"struct\" href=\"wasmer/externals/function/struct.Function.html\" title=\"struct wasmer::externals::function::Function\">Function</a>&gt;&gt; for <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::value::wasm_val_t"]}];
implementors["wasmer_wasi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_subscription_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_subscription_t\">__wasi_subscription_t</a>&gt; for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.WasiSubscription.html\" title=\"struct wasmer_wasi::syscalls::types::WasiSubscription\">WasiSubscription</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::WasiSubscription"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.WasiSubscription.html\" title=\"struct wasmer_wasi::syscalls::types::WasiSubscription\">WasiSubscription</a>&gt; for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_subscription_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_subscription_t\">__wasi_subscription_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_subscription_t"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()