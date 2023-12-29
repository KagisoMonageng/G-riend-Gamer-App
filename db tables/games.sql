PGDMP                         {            oniuhcik "   11.18 (Ubuntu 11.18-1.pgdg20.04+1)    15.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13716469    oniuhcik    DATABASE     t   CREATE DATABASE oniuhcik WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE oniuhcik;
                oniuhcik    false            �           0    0    DATABASE oniuhcik    ACL     ;   REVOKE CONNECT,TEMPORARY ON DATABASE oniuhcik FROM PUBLIC;
                   oniuhcik    false    4029            �            1259    13716507    games    TABLE       CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text NOT NULL,
    publisher character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    category text,
    screenshots text[],
    full_name text,
    description text,
    url text
);
    DROP TABLE public.games;
       public            oniuhcik    false            �            1259    13716513    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.games_game_id_seq;
       public          oniuhcik    false    226            �           0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;
          public          oniuhcik    false    227            9           2604    13716517    games game_id    DEFAULT     n   ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);
 <   ALTER TABLE public.games ALTER COLUMN game_id DROP DEFAULT;
       public          oniuhcik    false    227    226            �          0    13716507    games 
   TABLE DATA           t   COPY public.games (game_id, name, publisher, image, category, screenshots, full_name, description, url) FROM stdin;
    public          oniuhcik    false    226   .       �           0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.games_game_id_seq', 18, true);
          public          oniuhcik    false    227            ;           2606    13716527    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            oniuhcik    false    226            �   �  x��Z�r۸����5;7�~���+�cg���e'�U�J���$��,_�'�G�'ٯ�-�35�E,���_7�k܋�Z�l���c�Kv�#O5VY���v*t�U�˘������/�7�ֲ-#��<	�ۛ�p��zw�v�\��g�"��m?-�/ބo���wyw~>��d���dٸ��U&�e��7{^�&5�,(��%���F�*>�,���+|[�ء�"�D�qG"�Z�*#b�J0q�b~34bI_�F�<��u�Oڅg��`G�TB��n�5KE(����b<��/4m��󊹝�U)Sĭ��0&�+��3C��pF�~���r�\�q
/KU,=6M3����m�긮sNr: �t�<ȵ�Z	�?K�#\L���������YF\�>��e&UܸU[�Z�_*�-��������j+�U�)Lg5o�G�g��$���T�d⭄)����$!�1�ox�A�d2�b��A�V1S4�'��R�5��X�|�7�v�m	n4Fdu;�7���q-c�<�.��D��2(Z�K���n0�������(菽!����h��Nܹ�^��'3塑�̱�z�Q����EP�&��C����R�����x��5��Fe��v+RM�,��3�p��j��("ӄ �C���jK�(�5L�4�a��˄6��4��gLf��@�:C����gCe�@�L�B*���A�b]Xwύ�DU��z�a��L$	m��ֆ�gC��b��(�%�e𺌯iE@�1�j�%����"���j�F9"��(80��ޘE��>O%�L��f�����TK"���w�����{CS
}��B:ڹ� ��6Ô�Ɩʊtݹ�R�V,2�'��A�����w����7��"n���V�k�|������h8��u��s�{�:٠�y¿�Z�zٱ�B�(R����!^�0կ);�B�LB^7�,H�p2嘐_�Y�vf���*�D�����y��Q���#��F��n�2�:E�.k�=2,b��<�l&�R݇:�f9���y�Ka6��TIk{�u�@�;�׃��b1o-j�Kc��qs9c�~�ɕ ��[��"�2;����p8tGݮ;��~LD�x4��^a���%d��.�3�����j��.K�Wx�J�jҸ��q]!�9�iVjpƾ���m���=3՚�ٞ�Q b0쀜���_K-5�EM��dK���s<S�;Rg�%��h��D8�^Ο��na�V�͗������b�+�1U��*}D��rE!N$�i���0�� %�n�}6��^v�'D;Sy�r��[(��m^�/Px����E�4lB}",�|�L�F�M˚����.�"�.�[�*T˝ɢ���5Lx�0�RG�KP����������	�������]�e �s�B��^��,�	d�և�����(�֘a���'�W�aٵ�؁V��k"�M��������uf�(:�䯁m�T@m�R��8*+��˂�3X�������Ý/j���@G�Q)�pJ�5G�O�S��q��5E��)�o��;��CP9���sT���Sڦ!��H��y��z�sM��}"
~�SP`��m*"��UZ�Ē�d�^���04��ℹ*�o�V��+��ƨf�#���7�l�r��7���"(��d����FN&M��@̸�i�(?�	��I��������ߣ�oS6�o��)1;	��o����Ep���1$Ң�����^�"{�!0|`T���!_ �#7���2K�rh���CװB���^qx��:�B6�r�m�dۮ�K0��U2X07"PF ��f(���J"��	��n�S!^���˅�%�hʄDf�&�U�����.4��Ԗr��W;���[���~X��k$���:��$_U�:c*س�R8�\�;!�a�	>S�G`m�f����J�$�1�c���e���,�TzNt!�ٞ��'���eVQ
�&}�*"�m3�"m�c�c[�_$N���S���%<��+��f�C�������~��{��J���3�Ow2F[<�F���'W>�/����w�ܽ�~P��jj�h�5��f5��b��3iN)n+ ̟�H�v[5D*�r���,�I���WE~e��DS��IzjoV�U���m7�����9��T�:l��j"�#�es(�3���Μg�a�3nu����������h�g�9P-��l+&� y�>��8���߫	�0Q�"���CyL�Z��e������yE�{��i�BF��9jB����k,^ǒy��?��캍i"�wB'|WKr�w��n�;;����S��V<J�x	k�7
�W*��
q˾XrP��M�o���Պ���7��KU���_6�UK^kį%M�H���uV3�X� �4��N���L��lkZ���n9�9�FO�������qh�f��p��j�����`Lc��V�]��6��^o0��~DG�����a�]���}c��*Z��Ŷ�*33mc�x�&u���
�]�������}�Ev����!'U�����;8�&[�`����v�o��gA��c��=jչ�T+3�&�(����*Z���n���Wp���/n�c(��M�;��hJ�'s�2�wƣ���s��h~
6!<��C&��{�A�{��"�]7s�*���!�}u���N���M����HH`�J�e�Ch6�N�ߚ!�%�����bX��7���r�����H��҄��涤��D�0�
4�����'Alo���E�cC3{�/��p���lg:A;�������WWN��:w�.�_�����\�?��}����!j�X�i@��ꪶ����!:��;1(f;�q�n���I��۷�ED��������j��/��bkU�c��zd�n�J��6n>N)�{�I��U(9[�ǝ������;�-=�׾\���������ϝ�8_�O:�_L�J^�o����t����	�n-�����l�9I�7܂S���!S$FO����O��2�p^[Qz2�"���/󫻆ʚ�Q�*~ �T��"g���?nT&}w<p�m���:�bsT�<x�4�S`�>b)��9�jVQ��>)d�i����Z��dJ�	u�y�kԚ,O
��v�bI��b��7�fw�J��{āzA��~qu�� �nO܏T�}�)e���]r	��9F兜�ϋ��R|��SRXSn,�qwf{6�@}���+"�~����4���! ɐW��h�6R��Фv��k{Chn�x��ڗL0'D0������B�u�0�Ͱ'6:ئ2�KQ�����B�Z�y���̅X�8&��
�I*C��Z.��*4n<�)������I�(��;l��\�K�m����P�jz�\�~���>��@=u�B��_s��nAz�d4�C��YC~��N�z�tD����2�H��
T��%s?����t򨐕9��:ݑ��%�~�caUD����t'oܔ䖗�Ӂ�����������     